import { Box, Button, TextField } from "@skynexui/components";
import { useRouter } from "next/router";
import React from "react";
import nookies from 'nookies';

export default function HomeScreen(){
    const [ senha, setSenha ] = React.useState('123456');
    const router = useRouter();

    return (
        <Box
            styleSheet={{
                border: '1px solid #3396FF',
                flexDirection: 'column',
                marginTop: '20%',
                padding: '32px',
                borderRadius: '4px',
                boxShadow: '1px 1px 0 5px rgba(51, 150, 255, .2)',
                maxWidth: { xs: '100%', sm: '400px' },
                marginHorizontal: { xs: '16px', sm: 'auto' },
            }}
        >
            <form
                onSubmit={(event)=>{
                    event.preventDefault();
                    if(senha){
                        nookies.set(null, 'SENHA_SECRETA', senha, {
                            maxAge: 30 * 24 * 60 * 60,
                            path: '/'
                        })
                        router.push('/posts');
                    }else{
                        alert('Informe sua senha!');
                    }
                }}
            >
                <Box styleSheet={{ flexDirection: 'column' }}>
                    <TextField 
                        label="Qua é a sua senha secreta?"
                        value={senha}
                        styleSheet={{ fontFamily: 'sans-serif', focus: { borderColor: '#3396FF' }, hover: { borderColor: '#3396FF' } }}
                    />

                    <Button 
                        type="submit"
                        label="Acessar"
                        styleSheet={{
                            backgroundColor: '#3396FF',
                            fontFamily: 'sans-serif',
                            transition: '.4s',
                            hover: {
                                backgroundColor: '#3396FF9C'
                            }
                        }}
                        onChange={(event) => setSenha(event.target.value)}
                    />
                </Box>
            </form>
        </Box>
    )
}