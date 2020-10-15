import React, { Component } from 'react';

export const nullItem = {};
export const nullItemsList = [];
export const nullUser = {};

const ItemsContext = React.createContext({
    error: null,
    item: nullItem,
    itemsList: [],
    click: false,
    setError: () => {},
    clearError: () => {},
    setItem: () => {},
    clearItem: () => {},
    setItemsList: () => {},
    clearItemsList: () => {},
    setUser: () => {},
    clearUser: () => {},
    handleClick: () => {}
});
export default ItemsContext;

export class ItemsProvider extends Component {
    state = {
        error: null,
        item: nullItem,
        itemsList: [],
        user: nullUser,
        click: false
    };

    setError = error => {
        this.setState({ error });
    };

    clearError = () => {
        this.setState({ error: null });
    };

    setItem = item => {
        this.setState({ item });
    };

    clearItem = () => {
        this.setItem(nullItem);
    };

    setItemsList = itemsList => {
        console.log('context setting itemsList:', itemsList);
        this.setState({ itemsList });
    };

    clearItemsList = () => {
        this.setItemsList(nullItemsList);
    };

    setUser = user => {
        this.setState({ user });
    };

    clearUser = () => {
        this.setState(nullUser);
    };

    handleClick = () => {
        this.setState({ click: !this.state.click });
    };

    render() {
        const value = {
            state: this.state,
            error: this.state.error,
            item: this.state.item,
            itemsList: this.state.itemsList,
            user: this.state.user,
            click: this.state.click,
            setError: this.setError,
            clearError: this.clearError,
            setItem: this.setItem,
            clearItem: this.clearItem,
            setItemsList: this.setItemsList,
            clearItemsList: this.clearItemsList,
            setUser: this.setUser,
            clearUser: this.clearUser,
            handleClick: this.handleClick
        };

        return (
            <ItemsContext.Provider value={value}>
                {this.props.children}
            </ItemsContext.Provider>
        );
    }
}