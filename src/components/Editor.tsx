import React, {useMemo} from 'react';
import {InitialConfigType, LexicalComposer} from '@lexical/react/LexicalComposer';
import {PlainTextPlugin} from "@lexical/react/LexicalPlainTextPlugin";
import {ContentEditable} from '@lexical/react/LexicalContentEditable';
import {HistoryPlugin} from '@lexical/react/LexicalHistoryPlugin';
import {useLexicalComposerContext} from "@lexical/react/LexicalComposerContext";
import {useEffect} from "react";

import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';

const OnChangePlugin = () => {
    const [editor] = useLexicalComposerContext();
    useEffect(() => {
        return editor.registerUpdateListener((listener) => {
            console.log('DATA', listener.editorState.toJSON())
        });
    }, [editor]);
    return null;
}

export default function Editor() {
    const CustomContent = useMemo(() => {
        return (
            <ContentEditable className="p-2 min-h-[100px] w-full border-2 rounded-md"/>
        )
    }, []);

    const CustomPlaceholder = useMemo(() => {
        return (
            <div/>
        )
    }, []);

    const lexicalConfig: InitialConfigType = {
        namespace: 'My Rich Text Editor',
        onError: (e) => {
            console.log('ERROR:', e)
        }
    }

    return (
        <div className="w-3/5 p-3">
            <LexicalComposer initialConfig={lexicalConfig}>
                <PlainTextPlugin
                    contentEditable={CustomContent}
                    placeholder={CustomPlaceholder}
                    ErrorBoundary={LexicalErrorBoundary}
                />
                <HistoryPlugin/>
                <OnChangePlugin />
            </LexicalComposer>
        </div>
    );
}
