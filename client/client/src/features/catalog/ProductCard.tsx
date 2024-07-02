import { ListItem, ListItemAvatar, Avatar, ListItemText } from "@mui/material";

interface Props {
    product: Product;
}

export default function ProductCard({product}: Props) {
    return (
        <ListItem key={product.id}>
            <ListItemAvatar>
                <Avatar src={product.pictureUrl}></Avatar>
            </ListItemAvatar>
            <ListItemText>{product.name} - {product.price}</ListItemText>
        </ListItem> //unique keys based on index
    )
}