import React, { useState } from 'react';
import Glitch from 'glitch-javascript-sdk';


function CreatorTypesForm({currentTypes}) {
    const [types, setTypes] = useState([]);
    const [selectedType, setSelectedType] = useState('');
    const [availableTypes, setAvailableTypes] = useState(currentTypes || []);

    const handleTypeChange = (event) => {
        console.log(event.target.value);
        setSelectedType(event.target.value);
    };

    const addType = () => {
        //setTypes([...types, { id: selectedType, name: availableTypes.find(g => g.id === selectedType).name }]);
        Glitch.api.Users.addType({type_id :selectedType }).then(response => {
            console.log(response.data.data);
            setTypes(response.data.data.types);
            setSelectedType('');
        }).catch(error => {

        });

        
    };

    const removeType = (typeId) => {
        Glitch.api.Users.removeType(typeId).then(response => {
            console.log(response.data.data);
            setTypes(response.data.data.types);
        }).catch(error => {

        });

        //setTypes(types.filter(type => type.id !== typeId));
    };

    return (
        <div>
            <h3>Manage Your Types</h3>
            <p>Select the type of games you enjoy playing to be matched with games that you most enjoy.</p>
            <div><strong>Your Types:</strong></div>
            {types.map((type) => (
                <span key={type.id} className="badge bg-secondary me-2">
                    {type.name}
                    <button type='button' className="btn btn-danger btn-sm ms-2" onClick={() => removeType(type.id)}>
                        <i className="fas fa-trash-alt"></i>
                    </button>
                </span>
            ))}
            <div className="mt-3">
                <div className="input-group w-auto">
                    <select className="form-select" value={selectedType} onChange={handleTypeChange}>
                        <option value="">Select Type(s)</option>
                        {availableTypes.map((type) => (
                            <option key={type.id} value={type.id}>{type.name}</option>
                        ))}
                    </select>
                    <button type='button' className="btn btn-primary" onClick={addType}>
                        <i className="fas fa-plus"></i> Add
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CreatorTypesForm;
