import ItemList from "./item-list.js";

function Page(){
    return (
        <main>
            <h1 className="text-3xl font-bold">Shopping List</h1>
            <ItemList />
        </main>
    );
}

export default Page;