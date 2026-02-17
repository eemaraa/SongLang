import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const SongCard = ({ song, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image source={{ uri: `https://i.ytimg.com/vi/${song.youtube_id}/hqdefault.jpg` }} style={styles.thumbnail} />
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{song.title}</Text>
                <Text style={styles.artist}>{song.artist}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1E1E1E',
        borderRadius: 8,
        flexDirection: 'row',
        marginBottom: 15,
        overflow: 'hidden',
    },
    thumbnail: {
        width: 100,
        height: 100,
    },
    infoContainer: {
        padding: 10,
        justifyContent: 'center',
    },
    title: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    artist: {
        color: '#B3B3B3',
        fontSize: 14,
    },
});

export default SongCard;
