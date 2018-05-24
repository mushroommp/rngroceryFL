import React from 'react';
import {
    StyleSheet,
    FlatList
} from 'react-native';
import ListItem from '../ListItem/ListItem';

// const placeList = props => {
//     const placesOutput = props.places.map((place, i) => (
//     <ListItem 
//     key={i} 
//     placeName={place} 
//     onItemPressed={() => props.onItemDeleted(i)}/>
//     ));
//     return(
//         <ScrollView style={styles.listContainer}>
//           {placesOutput}
//         </ScrollView>
//     );
// };

const placeList = props => {
    return(
        <FlatList 
            style={styles.listContainer}
            data={props.places}
            renderItem={(info) => (
            <ListItem 
                placeName={info.item.val} 
                onItemPressed={() => props.onItemDeleted(info.item.key)}/>
            )}
        />
    );
};

const styles = StyleSheet.create({
    listContainer: {
        width: "100%"
      }
      
});

export default placeList;

