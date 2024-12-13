import React, { useState, useEffect, useRef } from 'react';
import Codemirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/closebrackets';
import ACTIONS from '../Actions';
import 'codemirror/mode/javascript/javascript';

const Editor = ({ socketRef, roomId, onCodeChange }) => {
    const editorRef = useRef(null);
    const [output, setOutput] = useState('');

    useEffect(() => {
        async function init() {
            editorRef.current = Codemirror.fromTextArea(
                document.getElementById('realtimeEditor'),
                {
                    mode: 'javascript',
                    theme: 'dracula',
                    autoCloseTags: true,
                    autoCloseBrackets: true,
                    lineNumbers: true,
                }
            );

            editorRef.current.on('change', (instance, changes) => {
                const { origin } = changes;
                const code = instance.getValue();
                onCodeChange(code);
                if (origin !== 'setValue') {
                    socketRef.current.emit(ACTIONS.CODE_CHANGE, {
                        roomId,
                        code,
                    });
                }
            });
        }
        init();
    }, [onCodeChange, socketRef, roomId]);

    useEffect(() => {
        if (socketRef.current) {
            socketRef.current.on(ACTIONS.CODE_CHANGE, ({ code }) => {
                if (code !== null) {
                    editorRef.current.setValue(code);
                }
            });
        }

        return () => {
            socketRef.current.off(ACTIONS.CODE_CHANGE);
        };
    }, [socketRef]);

    const handleRunCode = () => {
        const code = editorRef.current.getValue();
        try {
            // Wrap the code in an IIFE to capture the return value
            const result = new Function(`
                "use strict";
                return (function() {
                    ${code}
                })();
            `)();
            setOutput(result !== undefined ? result.toString() : 'undefined');
        } catch (error) {
            setOutput(`Error: ${error.message}`);
        }
    };

    return (
        <div>
            <button onClick={handleRunCode}>Run Code</button>
            <div>
                <textarea id="realtimeEditor"></textarea>
                <div>
                    <h3 style={{ color: 'white' }}>Output:</h3>
                    <pre style={{ color: 'white' }}>{output}</pre>
                </div>
            </div>
        </div>
    );
};

export default Editor;
