import { useParams } from 'react-router';

const ManageShoe = () => {
    const { shoeId } = useParams();

    const details = {
        title: shoeId ? 'Edit Shoe' : 'Add Shoe',
        btnText: shoeId ? 'Update' : 'Add',
    };

    const { title, btnText } = details;

    return (
        <div className="single-column-container">
            <h2>{title}</h2>
        </div>
    );
};

export default ManageShoe;