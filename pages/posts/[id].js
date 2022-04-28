import Link from "next/link";
import { Box, Text } from "@skynexui/components";
import { useRouter } from "next/router";
import dados from '../../dados.json';

export async function getStaticPaths(){
    const paths = dados.posts.map((postAtual)=>{
        return { params: { id: `${postAtual.id}` } };
    });

    return {
        paths: paths,
        fallback: false,
    }
}

export async function getStaticProps(context){
    const id = context.params.id;

    const post = dados.posts.find((courentPost)=>{
        if(courentPost.id === id){
            return true;
        }

        return false;
    })

    return {
        props: {
            id: post.id,
            title: post.title,
            date: post.date,
            content: post.content,
            video: post.video,
        }
    }
}

export default function PostByIdScreen(props){
    const post = {
        id: props.id,
        title: props.title,
        date: props.date,
        content: props.content,
        video: props.video,
    }

    return (
        <Box 
            styleSheet={{
                flexDirection: 'column',
                margin: '32px auto',
                maxWidth: '700px',
                paddingHorizontal: '16px',
            }}
        >
            {/* Cabeçalho */}
            <Text
                variant="heading2"
                tag="h1"
                styleSheet={{ color: '#3396FF', justifyContent: 'center', lineHeight: '1.2', fontSize: '2em', fontFamily: 'sans-serif' }}
            >
                {post.title}
            </Text>
            <Text
                styleSheet={{ 
                    color: '#3396FF', 
                    justifyContent: 'center', 
                    borderBottom: '1px solid #3396FF', 
                    paddingVertical: '16px', 
                    marginVertical: '16px', 
                    fontFamily: 'sans-serif' 
                }}
            >
                {post.date}
            </Text>

            {/* Área de conteúdo */}
            <Box styleSheet={{ flexDirection: 'column' }}>
                <Text styleSheet={{ fontFamily: 'sans-serif' }}>
                    {post.content}
                </Text>

                {post.video && <iframe style={{ marginTop: '32px',  minHeight: '400px' }} src={post.video} />}
            </Box>

            {/* Rodapé */}
            <Box
                styleSheet={{
                    marginTop: '16px',
                    padding: '16px',
                    justifyContent: 'center',
                    color: '#3396FF',
                    fontFamily: 'sans-serif',
                    borderTop: '1px solid #33296FF',
                    cursor: 'pointer',
                }}
            >
                <Link href="/posts" passHref>
                    <Text styleSheet={{ hover: { textDecoration: 'underline' }, fontFamily: 'sans-serif' }}>
                        Listar meus posts
                    </Text>
                </Link>
            </Box>
        </Box>
    )
}