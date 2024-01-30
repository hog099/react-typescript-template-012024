export default function ExampleTest() {
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-2xl font-bold text-center mb-8">Listagem de Produtos</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                    <img src="caminho_para_imagem_produto_1.jpg" alt="Produto 1" className="w-full h-48 object-cover rounded-md mb-4" />
                    <h2 className="text-lg font-semibold mb-2">Produto 1</h2>
                    <p className="text-gray-600 mb-4">Descrição breve do produto 1.</p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Comprar</button>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                    <img src="caminho_para_imagem_produto_2.jpg" alt="Produto 2" className="w-full h-48 object-cover rounded-md mb-4" />
                    <h2 className="text-lg font-semibold mb-2">Produto 2</h2>
                    <p className="text-gray-600 mb-4">Descrição breve do produto 2.</p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Comprar</button>
                </div>
            </div>
        </div>
    );
}
