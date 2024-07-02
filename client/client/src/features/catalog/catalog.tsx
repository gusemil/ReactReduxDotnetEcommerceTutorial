import { Product } from "../../app/models/product";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Avatar, Button, ListItemAvatar, ListItemText } from "@mui/material";
interface Props {
    products: Product[];
    addProduct: () => void;
}

export default function Catalog({products, addProduct}: Props) {
    return (
        <>
            <List>
            {products.map((product) => (
            <ListItem key={product.id}>
                 <ListItemAvatar>
                    <Avatar src={product.pictureUrl}></Avatar>
                 </ListItemAvatar>
                 <ListItemText>{product.name} - {product.price}</ListItemText>
                 </ListItem> //unique keys based on index
            ))}
        </List>
        <Button variant="contained" onClick={addProduct}>Add product</Button>
      </>
    )
}