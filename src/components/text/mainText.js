import Card from '../card/card';

const changeSize = ['clicando modifica o tamanho 1', 'clicando modifica o tamanho 2', 'clicando modifica o tamanho 3'];

const showModifyLetter = () => {
    console.log('alterou o texto');
}
const Modify = () => {
    return (
        <div>
            <h2>Welcome</h2>

            <div >
                {
                    changeSize.map((changeSize) => (
                        <Card key={changeSize} textTransform={'lowcase'} onClick={() => showModifyLetter()}>
                            <h3>Dev Quest Project</h3>
                            <p className='card-clicked'>{changeSize}</p>
                        </Card>
                    ))
                }
            </div>
        </div>
    )
}

export default Modify