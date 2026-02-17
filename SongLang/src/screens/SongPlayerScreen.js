import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

const SongPlayerScreen = ({ route }) => {
    const { song } = route.params;

    return (
        <SafeAreaView style={styles.root}>
            <Text style={styles.title}>{song.title}</Text>
            <Text style={styles.artist}>{song.artist}</Text>
            
            <View style={styles.playerContainer}>
                <Text style={styles.placeholderText}>YouTube Player will be here</Text>
            </View>

            <View style={styles.lyricsContainer}>
                <Text style={styles.placeholderText}>Synchronized Lyrics will be here</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
        padding: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    artist: {
        fontSize: 18,
        color: '#B3B3B3',
        marginBottom: 20,
    },
    playerContainer: {
        width: '100%',
        height: 220,
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    lyricsContainer: {
        flex: 1,
        width: '100%',
        backgroundColor: '#1E1E1E',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    placeholderText: {
        color: '#B3B3B3',
    }
});

export default SongPlayerScreen;
