import React from "react";
import { RectButton } from 'react-native-gesture-handler'
import { TextInput } from 'react-native'
import styles from './styles'

export function Button(props: { placeholder: String, onChange: () => {}, type: String }) {
    return (
        <TextInput style={styles.input} onChange={props.onChange} placeholder={props.placeholder.toString()} />
    )
}

