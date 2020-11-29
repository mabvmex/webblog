import React, {useState, useEffect} from 'react';
import { Switch, List, Button, Modal as ModalAntd, notification } from 'antd';
import { EditFilled, DeleteFilled } from '@ant-design/icons';
import Modal from '../../../Modal';
import DragSortableList  from 'react-drag-sortable';
import { updateMenuApi } from '../../../../api/menu';
import { getAccessTokenApi } from '../../../../api/auth'
import './MenuWebList.scss';


const { confirm } = ModalAntd;

export default function MenuWebList(props) {
    const { menu, setReloadMenuWeb } = props;

    const [ listItems, setListItems ] = useState([]);
    const [ isVisibleModal, setIsVisibleModal ] = useState(false);
    const [ modalTitle, setModalTitle ] = useState("");
    const [ modalContent, setModalContent ] = useState(null);

    useEffect( () => {
        const listItemsArray = [];
        
        menu.forEach(element => {
            listItemsArray.push({
            content: <MenuItem element={element} />
            });
        });
        
        setListItems(listItemsArray);

    }, [menu])


    const onSort = (sortedList, dropEvent) => {
        const accessToken = getAccessTokenApi();

        sortedList.forEach(element => {
            const { _id } = element.content.props.element;
            const order = element.rank;

            updateMenuApi(accessToken, _id, {order});
        })
    }
    
    return (
        <div className='menu-web-list'>
            <div className='menu-web-list__header'>
                <Button type='primary' shape='round' > Menú web </Button>
            </div>

            <div className='menu-web-list__items'>
                <DragSortableList items={listItems} onSort={onSort} type='vertical' />
            </div>

        </div>
    )
}

function MenuItem(props) {
    const {element} = props;

    return (
        <List.Item
            actions={[
                <Switch defaultChecked = {element.active} />,
                <Button type='primary' shape='circle' size='large'> <EditFilled />  </Button>,
                <Button type='danger' shape='circle' size='large'> <DeleteFilled />  </Button>
            ]}>
            <List.Item.Meta title={element.title} description={element.url} />
        </List.Item>
    )
}