import { useState } from 'react'



export default function useForm(initialState: object): [object, (e: React.ChangeEvent<HTMLInputElement>) => void] {

    const [input, setInput] = useState(initialState);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        setInput({
            ...input,
            [e.target.name]: e.target.value
        })

    }

    return [input, handleChange]

}



