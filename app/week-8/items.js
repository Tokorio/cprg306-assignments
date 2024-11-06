export default function Item({name, quantity, category, onSelect}) {
    return (
        <li
            className="flex justify-between items-center p-4 bg-white shadow rounded-lg cursor-pointer"
            onClick={() => onSelect(name)}
        >
            <div className="font-bold">{name}</div>
            <div>Quantity: {quantity}</div>
            <div className="text-gray-500 italic">{category}</div>
        </li>
    );
}

