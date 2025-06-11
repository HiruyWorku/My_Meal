import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Modal, Keyboard, TextInput, TouchableWithoutFeedback } from 'react-native';
import React, { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import AppSaveView from '../../components/views/AppSaveView';
import HomeHeader from '../../components/headers/HomeHeader';
import { AppColors } from '../../styles/colors';
import { AppFonts } from '../../styles/fonts';
import { s, vs } from 'react-native-size-matters';

const ProfileScreen = () => {
  const [activeTab, setActiveTab] = useState('Posts');
  const [modalVisible, setModalVisible] = useState(false);
  const [ingredient, setIngredient] = useState('');
  const [nutrition, setNutrition] = useState('');
  const [cooking, setCooking] = useState('');
  const [posts, setPosts] = useState<{ ingredient: string; nutrition: string; cooking: string; image: string | null }[]>([]);
  const [postImage, setPostImage] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const cameraStatus = await ImagePicker.requestCameraPermissionsAsync();
      const mediaStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (mediaStatus.status !== 'granted' || cameraStatus.status !== 'granted') {
        alert('Sorry, we need both camera and gallery permissions to make this work!');
      }
    })();
  }, []);

  const pickImageFromGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setPostImage(result.assets[0].uri);
    }
  };

  const takePhotoWithCamera = async () => {
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setPostImage(result.assets[0].uri);
    }
  };

  const handleCreatePost = () => {
    if (ingredient.trim() || nutrition.trim() || cooking.trim() || postImage) {
      setPosts((prev) => [{ ingredient, nutrition, cooking, image: postImage }, ...prev]);
      setIngredient('');
      setNutrition('');
      setCooking('');
      setPostImage(null);
      setModalVisible(false);
    }
  };

  return (
    <AppSaveView>
      <HomeHeader />

      <View style={styles.settingsIconContainer}>
        <TouchableOpacity onPress={() => console.log('Settings Pressed')}>
          <Image
            source={{ uri: 'https://static-00.iconduck.com/assets.00/settings-icon-2048x2048-ht9jo5se.png' }}
            style={styles.settingsIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Create Post Modal */}
      <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Create Post</Text>

              <TouchableOpacity style={styles.imageButton} onPress={pickImageFromGallery}>
                <Text style={styles.buttonText}>Choose from Gallery</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.imageButton} onPress={takePhotoWithCamera}>
                <Text style={styles.buttonText}>Take a Photo</Text>
              </TouchableOpacity>

              <TextInput
                style={styles.input}
                placeholder="Enter Ingredients..."
                multiline
                value={ingredient}
                onChangeText={setIngredient}
              />
              <TextInput
                style={styles.input}
                placeholder="Enter Nutrition Info..."
                multiline
                value={nutrition}
                onChangeText={setNutrition}
              />
              <TextInput
                style={styles.input}
                placeholder="Enter Cooking Instructions..."
                multiline
                value={cooking}
                onChangeText={setCooking}
              />

              {postImage && <Image source={{ uri: postImage }} style={styles.previewImage} />}

              <View style={styles.modalButtonsRow}>
                <TouchableOpacity style={styles.postButton} onPress={handleCreatePost}>
                  <Text style={styles.postButtonText}>Post</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}>
                  <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      {/* Profile Info */}
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.profileHeader}>
          <View style={styles.profileCircle}>
            <Image
              style={styles.profileImage}
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/847/847969.png' }}
            />
          </View>
          <Text style={styles.username}>Username</Text>
          <Text style={styles.fullname}>Full Name</Text>

          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>2</Text>
              <Text style={styles.statLabel}>Posts</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>34</Text>
              <Text style={styles.statLabel}>Following</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>126</Text>
              <Text style={styles.statLabel}>Followers</Text>
            </View>
          </View>
        </View>

        {/* Tabs */}
        <View style={styles.tabsRow}>
          {['Posts', 'Saved Recipes', 'Friends'].map((tab) => (
            <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)} style={[styles.tabItem, activeTab === tab && styles.activeTabItem]}>
              <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Posts */}
        <View style={styles.tabContent}>
          {activeTab === 'Posts' && (
            posts.length ? posts.map((post, index) => (
              <View key={index} style={styles.postCard}>
                {post.image && <Image source={{ uri: post.image }} style={styles.postImage} />}
                <Text style={styles.postText}><Text style={{ fontWeight: 'bold' }}>Ingredients:</Text> {post.ingredient}</Text>
                <Text style={styles.postText}><Text style={{ fontWeight: 'bold' }}>Nutrition:</Text> {post.nutrition}</Text>
                <Text style={styles.postText}><Text style={{ fontWeight: 'bold' }}>Cooking:</Text> {post.cooking}</Text>
              </View>
            )) : (
              <Text style={styles.emptyText}>No posts yet.</Text>
            )
          )}

          {activeTab === 'Saved Recipes' && <Text style={styles.emptyText}>No saved recipes yet.</Text>}
          {activeTab === 'Friends' && <Text style={styles.emptyText}>No friends yet.</Text>}
        </View>
      </ScrollView>

      {/* Add Post Button */}
      <TouchableOpacity style={styles.addPostButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.addPostButtonText}>+</Text>
      </TouchableOpacity>
    </AppSaveView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  scrollContent: { paddingBottom: vs(100) },
  profileHeader: { alignItems: 'center', marginTop: vs(30) },
  
  profileCircle: {
    width: s(100),       
    height: s(100),
    borderRadius: s(50),
    backgroundColor: '#fff',  
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',      
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,             
    marginBottom: vs(10),
  },
  profileImage: {
    width: s(80),          
    height: s(80),
    borderRadius: s(40),
    resizeMode: 'cover',
  },
  
  username: {
    fontSize: s(20),
    fontWeight: 'bold',
    color: AppColors.myMealcolor,
  },
  
  fullname: {
    fontSize: s(14),
    color: 'gray',
    marginTop: vs(2),
  },
  
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: vs(10),
  },
  
  statItem: {
    alignItems: 'center',
    marginHorizontal: s(10),
  },
  
  statNumber: {
    fontWeight: 'bold',
    fontSize: s(18),
    color: AppColors.myMealcolor,
  },
  
  statLabel: {
    fontSize: s(12),
    color: 'gray',
  },
  
  divider: {
    width: 1,
    height: '60%',
    backgroundColor: 'lightgray',
    marginHorizontal: s(8),
  },
  
  tabsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: vs(20),
  },
  
  tabItem: {
    paddingVertical: vs(6),
    paddingHorizontal: s(14),
    borderRadius: s(20),
  },
  
  activeTabItem: {
    backgroundColor: AppColors.myMealcolor,
    paddingVertical: vs(6),
    paddingHorizontal: s(14),
    borderRadius: s(20),
  },
  
  tabText: {
    fontSize: s(14),
    color: AppColors.myMealcolor,
  },
  
  activeTabText: {
    fontSize: s(14),
    fontWeight: 'bold',
    color: 'white',
  },
  
  tabContent: {
    marginTop: vs(20),
    paddingHorizontal: s(16),
  },
  
  postCard: {
    marginBottom: vs(20),
    backgroundColor: '#F9F3F0',
    borderRadius: s(8),
    overflow: 'hidden',
  },
  
  postImage: {
    width: '100%',
    height: vs(200),
  },
  
  postText: {
    padding: s(10),
    fontSize: s(14),
    color: AppColors.myMealcolor,
  },
  
  emptyText: {
    textAlign: 'center',
    color: 'gray',
    marginTop: vs(20),
  },
  
  addPostButton: {
    position: 'absolute',
    bottom: vs(20),
    right: s(20),
    backgroundColor: AppColors.primaryColor,
    width: s(50),
    height: s(50),
    borderRadius: s(25),
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  addPostButtonText: {
    color: 'white',
    fontSize: s(24),
  },
  
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  modalContent: {
    backgroundColor: 'white',
    borderRadius: s(10),
    padding: s(20),
    width: '90%',
  },
  
  modalTitle: {
    fontSize: s(18),
    fontWeight: 'bold',
    marginBottom: vs(10),
  },
  
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: s(8),
    padding: s(10),
    marginBottom: vs(10),
    minHeight: vs(60),
    textAlignVertical: 'top',
  },
  
  imageButton: {
    backgroundColor: AppColors.myMealcolor,
    paddingVertical: vs(10),
    borderRadius: s(8),
    marginBottom: vs(8),
  },
  
  modalButtonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: vs(10),
  },
  
  postButton: {
    backgroundColor: AppColors.primaryColor,
    flex: 1,
    marginRight: s(5),
    paddingVertical: vs(10),
    borderRadius: s(8),
  },
  
  cancelButton: {
    backgroundColor: 'gray',
    flex: 1,
    marginLeft: s(5),
    paddingVertical: vs(10),
    borderRadius: s(8),
  },
  
  postButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: s(14),
  },
  
  cancelButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: s(14),
  },
  
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: s(14),
  },
  
  settingsIconContainer: {
    position: 'absolute',
    top: vs(60),
    right: s(20),
    zIndex: 5,
  },
  
  settingsIcon: {
    width: s(28),
    height: s(28),
  },
  previewImage: { 
    width: '100%',
    height: vs(200),
    borderRadius: s(8),
    marginTop: vs(10),
  },
});
