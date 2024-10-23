import React, { useEffect, useState } from 'react';
const Fetch = () => {
    const [surahData, setSurahData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSurahData = async () => {
      const netInfo = await NetInfo.fetch();
      if (netInfo.isConnected) {
        //Fetch from API
        try {
          const response = await fetch('https://api.alquran.cloud/v1/surah');
          const json = await response.json();
          setSurahData(json.data);
          await AsyncStorage.setItem('surahData', JSON.stringify(json.data)); // Store data in AsyncStorage
          setLoading(false);
        } catch (error) {
          console.error('Error fetching data:', error);
          setLoading(false);
        }
      } else {
        // Fetch from AsyncStorage
        try {
          const storedData = await AsyncStorage.getItem('surahData');
          if (storedData) {
            setSurahData(JSON.parse(storedData));
          }
          setLoading(false);
        } catch (error) {
          console.error('Error loading data from AsyncStorage:', error);
          setLoading(false);
        }
      }
    };

    fetchSurahData();
  }, []);

  
}