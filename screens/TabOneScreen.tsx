import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import ConversationList from '../components/ConversationList';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const conversations = [
    { id: '1', name: 'Aaron Gordon', msg: 'Lorem ipsum dolor sit amet consectetur', img: 'https://i.pinimg.com/originals/a6/97/3d/a6973da69ec07893ab8e8e990124dc4e.jpg' },
    { id: '2', name: 'Zack Lavin', msg: 'Hello', img: 'https://static.wikia.nocookie.net/windbreaker/images/f/ff/F911f7add20d410ca51d6373ce3f7578.jpg/revision/latest?cb=20210611124331' },
    { id: '9', name: 'Jason Tatum', msg: 'Lorem ipsum dolor sit amet consectetur', img: 'https://thumbs.dreamstime.com/z/funny-cartoon-monster-face-vector-monster-square-avatar-funny-cartoon-monster-cyclops-face-vector-halloween-monster-square-avatar-175919095.jpg' },
    { id: '3', name: 'Giannis Anteto.', msg: 'Hello', img: 'https://i.pinimg.com/originals/a6/97/3d/a6973da69ec07893ab8e8e990124dc4e.jpg' },
    { id: '4', name: 'Kevin Duran', msg: 'Hello', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBQCIxGZXyNRjr65-K1KFxpswWw_136x9NB6fwadDXVZyCiWGEF3Z17CUBcYH6Dv-Ad5o&usqp=CAU' },
    { id: '5', name: 'Lebron James', msg: 'Hello', img: 'https://i.pinimg.com/originals/a6/97/3d/a6973da69ec07893ab8e8e990124dc4e.jpg' },
    { id: '6', name: 'Chris Middleton', msg: 'Lorem ipsum dolor sit amet consectetur', img: 'https://i.pinimg.com/originals/a6/97/3d/a6973da69ec07893ab8e8e990124dc4e.jpg' },
    { id: '7', name: 'J Pole', msg: 'Hello', img: 'https://i.pinimg.com/originals/a6/97/3d/a6973da69ec07893ab8e8e990124dc4e.jpg' },
    { id: '8', name: 'Blake Griffin', msg: 'Lorem ipsum dolor sit amet consectetur', img: 'https://i.pinimg.com/originals/a6/97/3d/a6973da69ec07893ab8e8e990124dc4e.jpg' }

  ]
  return (
    <View style={styles.container}>
      <FlatList showsVerticalScrollIndicator={false} data={conversations} keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <ConversationList img={item.img} name={item.name} msg={item.msg} />
          </TouchableOpacity>)} />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: Colors.dark.secondary,


  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
