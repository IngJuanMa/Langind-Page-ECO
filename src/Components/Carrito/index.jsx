import "./Carrito.css"

const Carrito = ({carritoRef, onCloseDialog}) => {
    return (
        <>
            <dialog ref={carritoRef}>
                <section method="dialog" className="seccioncarrito">
                    <img src="/img/close.svg" onClick={onCloseDialog}/>
                </section>
            </dialog>
        </>
    )
}

export default Carrito;