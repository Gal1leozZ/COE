import React from 'react'
import {
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    Text
} from './ReportElements';

const Report = () => {
    return (
        <>
         <Container>
             <FormWrap>
                 <Icon to="/">Western Digital</Icon>
                 <FormContent>
                     <Form action="#">
                         <FormH1>Report</FormH1>
                         <FormLabel htmlFor="for">Email</FormLabel>
                         <FormInput type="email" required />
                         <FormLabel htmlFor='for'>Password</FormLabel>
                         <FormInput type="password" required />
                         <FormButton type="submit">Continue</FormButton>
                         <Text>Forget password</Text>
                     </Form>
                 </FormContent>
             </FormWrap>
         </Container>  
        </>
    )
}

export default Report
