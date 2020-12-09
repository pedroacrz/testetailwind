
export default function footer() {
    return (
        <div className="p-5 md:py-10 md:p-20 bg-gray-100">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div className="">
                </div>
                <div className="social">
                    <h3 className="mt-2">Sociais</h3>
                    <ul className="mt-3">
                        <li className="text-gray-500">
                            Instagram
                        </li>
                        <li className="text-gray-500">
                            Facebook
                        </li>
                    </ul>
                </div>
                <div className="atendimento">
                <h3 className="mt-2">atendimento</h3>
                    <ul className="mt-3">
                        <li className="text-gray-500">
                            (21) 99380-1549
                        </li>
                        <li className="text-gray-500">
                            lasuburbana.modapraia@gmail.com
                        </li>
                    </ul>
                </div>
                <div className="creditos">
                </div>
            </div>
        </div>
    )
}