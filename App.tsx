import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Fetch from "./Hooks/Fetch";

const App = () => {
  <Fetch />

  const renderSurahItem = ({ item }: any) => (
    <View style={styles.surahItem}>
      <View style={styles.surahNumber}>
        <Text style={styles.numberText}>{item.number}</Text>
      </View>
      <View style={styles.surahDetails}>
        <Text style={styles.surahName}>{item.englishName}</Text>
        <Text style={styles.surahMeta}>{item.revelationType} - {item.numberOfAyahs} VERSES</Text>
      </View>
      <Text style={styles.arabicText}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Top Header */}
      <View style={styles.header}>
        <Ionicons name="menu-outline" size={28} color="#fff" />
        <Text style={styles.title}>Quran App</Text>
        <Ionicons name="search-outline" size={28} color="#fff" />
      </View>

      <View style={styles.welcomeSection}>
        <Text style={styles.greetingText}>Asslamualaikum</Text>
        <Text style={styles.nameText}>Tanvir Ahassan</Text>

        {/* Last Read Section */}
        <View style={styles.lastRead}>
          <Image source={require('../assets/favicon.png')} style={styles.bookImage} />
          <View>
            <Text style={styles.lastReadText}>Last Read</Text>
            <Text style={styles.lastReadSurah}>Al-Fatiah</Text>
            <Text style={styles.lastReadMeta}>Ayah No: 1</Text>
          </View>
        </View>
      </View>

      <View style={styles.tabs}>
        <Text style={styles.activeTab}>Surah</Text>
        <Text style={styles.inactiveTab}>Para</Text>
        <Text style={styles.inactiveTab}>Page</Text>
        <Text style={styles.inactiveTab}>Hijb</Text>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#6A42F2" style={styles.loader} />
      ) : (
        <FlatList
          data={surahData}
          keyExtractor={(item) => item.number.toString()}
          renderItem={renderSurahItem}
          contentContainerStyle={styles.listContent}
        />
      )}

      <View style={styles.bottomNavigation}>
        <Ionicons name="book-outline" size={28} color="#fff" />
        <Ionicons name="mail-outline" size={28} color="#fff" />
        <Ionicons name="person-outline" size={28} color="#fff" />
      </View>
    </View>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1E8FC',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#6A42F2',
    padding: 20,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  welcomeSection: {
    padding: 20,
    backgroundColor: '#fff',
    marginTop: -30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  greetingText: {
    color: '#666',
    fontSize: 16,
  },
  nameText: {
    color: '#222',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 5,
  },
  lastRead: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#EADDFB',
    borderRadius: 10,
    padding: 15,
  },
  bookImage: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
  lastReadText: {
    color: '#6A42F2',
    fontSize: 16,
  },
  lastReadSurah: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  lastReadMeta: {
    color: '#888',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  activeTab: {
    color: '#6A42F2',
    fontSize: 16,
    fontWeight: 'bold',
  },
  inactiveTab: {
    color: '#aaa',
    fontSize: 16,
  },
  listContent: {
    padding: 20,
  },
  surahItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  surahNumber: {
    backgroundColor: '#EADDFB',
    padding: 10,
    borderRadius: 10,
    marginRight: 15,
  },
  numberText: {
    color: '#6A42F2',
    fontWeight: 'bold',
  },
  surahDetails: {
    flex: 1,
  },
  surahName: {
    fontSize: 18,
    color: '#222',
    fontWeight: 'bold',
  },
  surahMeta: {
    color: '#888',
  },
  arabicText: {
    color: '#6A42F2',
    fontSize: 20,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#6A42F2',
    paddingVertical: 15,
  },
});
