import Link from "next/link";
import { Box, Text, Image } from "@skynexui/components";
import dados from '../dados.json';

export default function HomeScreen(){

    const infos = {
        nome: 'Rafael Vieira',
        gitUser: 'rafaeldevcode'
    }
    const posts = dados.posts;

    return (
        <Box
            styleSheet={{
                flexDirection: 'column',
                margin: '32px auto',
                maxWidth: '800px',
                paddingHorizontal: '16px',
            }}
        >
            <Image 
            src={`https://github.com/${infos.gitUser}.png`}
            styleSheet={{
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                margin: 'auto',
                border: '2px solid #3396FF'
            }}
            />

            <Text
                variant="heading1"
                tag="h1"
                styleSheet={{ 
                    color:'#3396FF', 
                    justifyContent: 'center', 
                    fontFamily: 'sans-serif', 
                    marginBottom: '32px', 
                    fontSize: '2.5em' 
                }}
            >{infos.nome}</Text>

            <Box 
                styleSheet={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    marginTop: '16px',
                    gridGap: '16px',
                }}
            >
                {posts.map(({ title, content, id })=>(
                    <Post key={id} title={title} content={content} id={id} />
                ))}
            </Box>
        </Box>
    )
}

function Post({ title, content, id }){
    return (
        <Box
            styleSheet={{
                flexDirection: 'column',
                border: '2px solid #3396FF',
                borderRadius: '5px',
                padding: '16px',
                boxShadow: '1px 1px 5px 0 #3396FF',
                transition: '.3s',
                hover: {
                    boxShadow: '1px 1px 5px 5px #3396FF',
                }
            }}
        >
            <Link href={`/posts/${id}`} passHref>
                <Text
                    tag="a"
                    variant="heading4"
                    styleSheet={{ display: 'block', color: '#3396FF', marginBottom: '16px', cursor: 'pointer', fontFamily: 'sans-serif' }}
                >
                    {title}
                </Text>
            </Link>

            <Text styleSheet={{ fontFamily: 'sans-serif' }}>
                {content.substring(0, 120)}...
            </Text>

        </Box>
    )
}