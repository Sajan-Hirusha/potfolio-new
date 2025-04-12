function ItemCard(props) {
    return (
        <div
            className={`${props.class} itemCard bg-white shadow-md rounded-lg text-center relative overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 mx-2 `}
            style={{ width: '100vw', maxWidth: '260px' ,height:'auto'}}
        >
            <img
                src={props.imageUrl}
                alt="productImage"
                className={`rounded-t-lg w-[91%] h-[230px] object-cover transition-transform duration-1000 ease-in-out transform hover:scale-110 mx-auto`}
                style={{ objectFit: 'contain' }}
            />
            <div className="bg-black p-4 mt-2">
                <p className="text-white text-xs mb-4"> {props.description}</p>
            </div>
        </div>
    );
}

export default ItemCard;
