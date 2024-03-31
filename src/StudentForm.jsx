import React, {useState} from "react";
import 'semantic-ui-css/semantic.min.css';
import {  FormField, Button, Checkbox, Form, Input, Select } from 'semantic-ui-react'

const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
]

const StudentForm = () => {

    const [firstName,setFirstName] = useState('');
    const [email,setEmail] = useState('');
    const [gender, setGender] = useState('male');
    const [phoneNumber, setPhoneNumber] = useState(0);

    const handleSubmit =() =>{
        console.log(firstName, email, gender, phoneNumber);
    }

    return(
        <Form onSubmit={handleSubmit} > 
                <FormField
                    control={Input}
                    label='Full name'
                    value={firstName}
                    onChange= {(e) => setFirstName(e.target.value)}
                    placeholder='Full name'
                />
                <FormField
                    control={Input}
                    label='Email'
                    value={email}
                    onChange= {(e) => setEmail(e.target.value)}
                    options={options}
                    placeholder='email'
                />
                <FormField
                    control={Select}
                    label='Gender'
                    value={gender}
                    options={options}
                    onChange= {(e,data) => setGender(data.value)}
                    placeholder='Gender'
                />
                <FormField
                    control={Input}
                    label='Phone number'
                    value={phoneNumber}
                    onChange= {(e) => setPhoneNumber(e.target.value)}
                    placeholder='+1123456789'
                />
            <FormField>
                <Checkbox label='I agree to the Terms and Conditions' />
            </FormField>
            <Button type='submit'>Submit</Button>
        </Form>
    )
}

export default StudentForm;