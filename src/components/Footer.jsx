export default function Footer({ completedTodos, totalTodos }) {
    return (
        <footer className="bg-gray-100 py-3 text-center border-t border-gray-200 mt-6 text-base text-gray-800">
            <span className="font-bold text-green-700 mr-4">
                Completed: {completedTodos}
            </span>
            <span className="font-bold text-blue-700">
                Total: {totalTodos}
            </span>
        </footer>
    );
}
