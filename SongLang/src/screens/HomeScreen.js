import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import SongCard from '../components/SongCard';

// Mock Data
const MOCK_SONGS = [
    { id: 1, youtube_id: 'C_3d6GntP9I', title: 'Perfect', artist: 'Ed Sheeran' },
    { id: 2, youtube_id: 'fJ9rUzIMcZQ', title: 'Someone Like You', artist: 'Adele' },
    { id: 3, youtube_id: 'hLQl3WQQoQ0', title: 'Despacito', artist: 'Luis Fonsi' },
];

const HomeScreen = ({ navigation }) => {

    const onSongPress = (song) => {
        navigation.navigate('SongPlayer', { song });
    };

    return (
        <SafeAreaView style={styles.root}>
            <Text style={styles.title}>Choose a song to learn</Text>
            <FlatList
                data={MOCK_SONGS}
                renderItem={({ item }) => <SongCard song={item} onPress={() => onSongPress(item)} />}
                keyExtractor={item => item.id.toString()}
                style={styles.list}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#121212',
        padding: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        margin: 10,
    },
    list: {
        width: '100%',
    }
});

export default HomeScreen;
