const initState = {
    'title': 'Mon nouveau formulaire',
    form: [
        {
            id: 1,
            title: "Mon premier element",
            content: "Contenu de l'element 1"
        },
        {
            id: 2,
            title: "Mon deuxieme element",
            content: "Contenu de l'element 2"
        }
    ]
}

const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer;