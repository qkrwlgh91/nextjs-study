import path from 'path';
import fs from 'fs/promises';

import { Fragment } from 'react';

function ProductDetailPage(props) {
    const { loadedProduct } = props;

    if (!loadedProduct) {
        return <p>Loading...</p>;
    }

    return (
        <Fragment>
            <h1>{loadedProduct.title}</h1>
            <p>{loadedProduct.description}</p>
        </Fragment>
    )
}

async function getData() {
    const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData);

    return data;
}

export async function getStaticProps(context) {
    console.log("context => ", context);
    const { params } = context;

    const productId = params.pid;

    const data = await getData();

    const product = data.products.find(product => product.id === productId);

    if (!product) {
        return { notFound: true };
    }

    return {
        props: {
            loadedProduct: product
        }
    }
}

export async function getStaticPaths() {
    const data = await getData();
    console.log('data :: ', data);

    const ids = data.products.map(product => product.id);
    console.log('ids :: ', ids);

    const pathWithParams = ids.map((id) => ({ params: { pid: id } }));
    console.log('pathWithParams :: ', pathWithParams);

    return {
        paths: pathWithParams,
        fallback: true // true, false, blocking
    };
}

export default ProductDetailPage;