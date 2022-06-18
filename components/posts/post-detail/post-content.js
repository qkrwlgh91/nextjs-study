import ReactMarkdown from 'react-markdown';
import Image from 'next/image';

import PostHeader from './post-header';
import classes from './post-content.module.css';

function PostContent(props) {
    const { post } = props;

    console.log(post)

    const imagePath = `/images/posts/${post.slug}/${post.image}`;

    const customRenderers = {
        // image(image) {
        // img(image) {
        //     return <Image src={`/images/posts/${post.slug}/${image.src}`} alt={image.alt} width={600} height={300} />
        // },
        // paragraph(paragraph) {
        p(paragraph) {
            const { node } = paragraph;

            console.log("node : ", node)

            if (node.children[0].tagName === 'img') {
                const image = node.children[0];

                console.log(image)

                return (
                    <div className={classes.image}>
                        <Image src={`/images/posts/${post.slug}/${image.properties.src}`} alt={image.alt} width={600} height={300} />
                    </div>
                )
            }

            return (
                <p>{paragraph.children}</p>
            )
        }
    }

    return (
        <article className={classes.content}>
            <PostHeader title={post.title} image={imagePath} />
            <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
        </article>
    )
}

export default PostContent;