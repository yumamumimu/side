import React, { useEffect, useRef } from 'react';
import { Image, StyleSheet, View, Animated } from 'react-native';
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from '@/components/ThemedText';
import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient
import { Link } from 'expo-router'; // Import Link untuk navigasi

export default function HomeScreen() {
  const handAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const waveAnimation = () => {
      Animated.sequence([
        Animated.timing(handAnimation, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(handAnimation, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ]).start(() => waveAnimation());
    };
    waveAnimation();
  }, [handAnimation]);

  const handRotation = handAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '20deg'],
  });

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#191919', dark: '#3a3e43' }}
      headerImage={
        <Image
          source={require('@/assets/images/Moon.jpg')}
          style={styles.headerImage}
        />
      }
    >
      {/* Bagian Header dengan Gradient */}
      <LinearGradient
        colors={['#191919', '#3a3e43']}
        style={styles.titleContainer}
      >
        <ThemedText type="title" style={styles.titleText}>
          Sawadeekhrab ! Welcome to My Blog!
        </ThemedText>
        <Animated.Image
          source={require('@/assets/images/waveee.png')}
          style={[styles.handImage, { transform: [{ rotate: handRotation }] }]}
        />
      </LinearGradient>

      {/* Bagian Foto Profil */}
      <LinearGradient
        colors={['#FFFFFF', '#F4F6F9']}
        style={styles.photoContainer}
      >
        <ThemedText type="subtitle" style={styles.photoTitle}>
          Foto Profil
        </ThemedText>
        <Image
          source={require('@/assets/images/awa.jpeg')}
          style={styles.profilePhoto}
        />
      </LinearGradient>

      {/* Bagian Quotes */}
      <LinearGradient
        colors={['#FFFFFF', '#E5E5E5']}
        style={styles.quotesContainer}
      >
        <ThemedText type="subtitle" style={styles.quotesTitle}>
          Nasehat
        </ThemedText>
        <ThemedText style={styles.quoteText}>
          "SHOLAT, SENYUM, SALAM, SAPA."
        </ThemedText>
      </LinearGradient>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
    marginTop: 40,
    padding: 20, // Tambahkan padding untuk spacing
    borderRadius: 12, // Rounded corners
  },
  titleText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF', // Warna putih untuk teks di atas gradient gelap
    textAlign: 'center',
  },
  headerImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  handImage: {
    width: 40,
    height: 40,
    marginLeft: 10,
  },
  photoContainer: {
    alignItems: 'center',
    padding: 24,
    margin: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 5,
    width: '90%',
    alignSelf: 'center',
  },
  photoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1D3D47',
    marginBottom: 16,
  },
  profilePhoto: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#1D3D47',
    marginBottom: 20,
    resizeMode: 'cover',
  },
  quotesContainer: {
    alignItems: 'center',
    padding: 24,
    margin: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 5,
    width: '90%',
    alignSelf: 'center',
  },
  quotesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1D3D47',
    marginBottom: 16,
  },
  quoteText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 8,
    lineHeight: 24,
    fontStyle: 'italic',
  },
  linkText: {
    color: '#007BFF',
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
  },
});
