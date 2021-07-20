import React, { useState } from 'react'
import { IState as Props } from '../App'


interface IProps {

    people: Props['people']
    setPeople: React.Dispatch<React.SetStateAction<Props['people']>>

}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {

    const [input, setInput] = useState({
        name: '',
        age: '',
        note: '',
        url: ''
    })


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })

    }

    const handleClick = (): void => {

        if (
            !input.name ||
            !input.age ||
            !input.url
        ) {
            return
        }

        setPeople([
            ...people,
            {
                name: input.name,
                age: parseInt(input.age),
                note: input.note,
                url: input.url
            }

        ])




    }



    return (
        <div>
            <input
                type='text'
                placeholder='Name'
                value={input.name}
                onChange={handleChange}
                name='name'
            />
            <input
                type='text'
                placeholder='Age'
                value={input.age}
                onChange={handleChange}
                name='age'
            />
            <input
                type='text'
                placeholder='Url'
                value={input.url}
                onChange={handleChange}
                name='url'
            />
            <textarea
                placeholder='Note'
                value={input.note}
                onChange={handleChange}
                name='note'
            />
            <button
                onClick={handleClick}
            >


            </button>
        </div>
    )
}

export default AddToList
