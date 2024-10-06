import React from 'react';
import { Dimensions, FlatList, Image, ImageBackground, Platform, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../../../theme/Colors';
import AppBar from '../../../components/AppBar';
import Images from '../../../theme/Images';
import CustomButton from '../../../components/CustomButton';
import GradientCustomButton from '../../../components/GradientCustomButton';
import { creatorArray } from '../../../../config/constants';
// import { ScrollView } from 'react-native-gesture-handler';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const SeasonScreen: React.FC = () => {

    return (
        <SafeAreaView style={styles.container}>

            <StatusBar
                animated={true}
                backgroundColor={Platform.OS === 'android' ? Colors.task1BackgroundColor : 'transparent'} // Android only
                barStyle={Platform.OS === 'android' ? 'light-content' : 'dark-content'}
            />

            {/* Custom AppBar component */}
            <AppBar
                screenName={'Notifiche attive'}
                left={true}
                appBarContainer={{ backgroundColor: Colors.pinkBarColor, paddingVertical: 6 }}
                centerIconImage={Images.notification_icon}
            />
            <ScrollView>

                <View style={{ height: screenHeight * 0.5, marginTop: -screenHeight * 0.17 }}>
                    <Image
                        source={Images.vans_season_image}
                        resizeMode='contain'
                        style={{ width: screenWidth * 1, height: '100%' }}
                    />
                </View>
                {/* set View with a 50% height of a screen by using Dimansion API */}
                <View style={{ height: screenHeight * 0.45, marginTop: -screenHeight * 0.32, borderRadius: 20, }}>
                    <ImageBackground
                        source={Images.vans_boy_image}
                        resizeMode='contain'
                        style={styles.backgroundImageStyle}
                    >
                        {/* Inside view with a background Image */}
                        <View style={styles.gradientButtonContainer}>
                            <GradientCustomButton
                                colorsArray={[Colors.darkBluePink, Colors.lightBluePink, Colors.darkPink]} // At least 2 colors are mandatory in colorsArray
                                colorsAngle={60} // the angle to stack a colorsArray.
                                textStytle={{ fontSize: 20, }}
                                buttonStyle={{ width: '80%', }}
                                name={'Gioca ora'}
                            />
                        </View>
                    </ImageBackground>
                </View>

                <View style={{ marginTop: -screenHeight * 0.02}}>
                    <LinearGradient
                        colors={['rgba(236, 27, 227, 0.36)', 'rgba(236, 27, 227, 0)']}
                        style={styles.progressContainer}
                    >
                        <Image
                            source={Images.progress_image}
                            resizeMode='contain'
                            style={{ width: '100%', height: '60%' }}
                        />
                    </LinearGradient>
                </View>

                {/* Points Designing code */}
                <View style={styles.pointsContainer}>
                    <View style={styles.pointsItemContainer}>
                        <LinearGradient
                            colors={['rgba(214, 16, 170, 0.9)', 'rgba(84, 58, 120, 0.2)', 'rgba(80, 65, 122, 0)']}
                            angle={0}
                            useAngle={true}
                            style={{ width: '60%', height: '70%', borderRadius: 16 }}
                        >
                            <ImageBackground
                                source={Images.locked}
                                resizeMode='contain'
                                style={{ width: '100%', height: '100%' }}
                            />
                        </LinearGradient>
                        <View style={{ padding: 8, alignItems: 'center' }}>
                            <Text style={styles.namePinkText}>LOCKED</Text>
                        </View>
                    </View>
                    <View style={styles.pointsItemContainer}>
                        <LinearGradient
                            colors={['rgba(214, 182, 16, 0.9)', 'rgba(84, 58, 120, 0.2)', 'rgba(80, 65, 122, 0)']}
                            angle={0}
                            useAngle={true}
                            style={{ width: '60%', height: '70%', borderRadius: 16 }}
                        >
                            <ImageBackground
                                source={Images.golden}
                                resizeMode='contain'
                                style={{ flexDirection:'row',width: '100%', height: '100%', justifyContent:'flex-end'}}
                            >
                                <LinearGradient
                                    colors={['rgba(122, 1, 100, 1)', 'rgba(219, 7, 117, 1)', 'rgba(255, 10, 113, 1)','rgba(122, 1, 100, 1)']}
                                    angle={90}
                                    useAngle={true}
                                    style={{ width:'60%', height: '25%', borderRadius:8,marginRight:-4}}
                                >
                                    <Text style={[styles.greeting,{fontSize:20, textAlign:'center'}]}>+30</Text>
                                </LinearGradient>
                            </ImageBackground>
                        </LinearGradient>
                        <View style={{ padding: 8, alignItems: 'center' }}>
                            <Text style={styles.namePinkText}>GOLDEN POINTS</Text>
                        </View>
                    </View>
                </View>

                {/* Exclusive Drops Design*/}
                <View style={{ marginVertical: 32, marginHorizontal: 16 }}>
                    <LinearGradient
                        colors={['#612DB8', '#EC1BE3']}
                        style={styles.dropsContainer}
                        useAngle={true}
                        angle={90}
                    >
                        <View style={{ flexDirection: 'row', height: '100%', }}>
                            <View style={styles.dropsFirstContainer}>
                                <View style={styles.exclusiveContainer}>
                                    <Text style={styles.heading1}>EXCLUSIVE DROPS</Text>
                                </View>
                                <Text style={styles.greeting}>Vans season</Text>
                                <View style={styles.horizontalLine} />
                                <Text style={styles.normalText}>Lorem ipsum dolor sit amet</Text>
                                <CustomButton
                                    name={'Vai allo shop'}
                                    buttonStyle={{ width: '70%', backgroundColor: Colors.pinkBarColor, marginVertical: 0 }}
                                />
                            </View>
                            <View style={{ width: '40%', height: '100%' }}>
                                <Image
                                    source={Images.drops_collection}
                                    resizeMode='contain'
                                    style={{ width: '100%', height: '100%' }}
                                />
                            </View>
                        </View>
                    </LinearGradient>
                </View>

                {/* Creators Designing Code */}
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={[styles.greeting, { textAlign: 'center' }]}>Creators</Text>
                    <View style={{ margin: 8 }}>
                        <FlatList
                            data={creatorArray}
                            renderItem={({ item, index }) =>
                                <View style={{ margin: 6 }}>
                                    <ImageBackground
                                        source={item.image}
                                        resizeMode='contain'
                                        style={{ width: screenWidth * 0.27, height: screenHeight * 0.2 }}
                                    >
                                        <View style={item.status ? styles.statusContainer : [styles.statusContainer, { width: '60%', backgroundColor: Colors.offlineBackground }]}>
                                            <View style={item.status ? styles.statusPoint : [styles.statusPoint, { backgroundColor: Colors.offlineText }]} />
                                            <Text style={item.status ? styles.liveText : [styles.liveText, { color: Colors.offlineText }]}>{item.status ? 'Live' : 'Offline'}</Text>
                                        </View>
                                    </ImageBackground>
                                    <Text style={styles.nameText}>{item.name}</Text>
                                </View>}
                            numColumns={3} //Arrange the flatList item into 3 columns
                        />
                    </View>
                </View>

                {/* Design For Discover More  */}
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <TouchableOpacity
                        style={{ flexDirection: 'row', justifyContent: 'center', margin: 16 }}
                    >
                        <Text style={[styles.discoverText]}>Discover more</Text>
                        <Image
                            source={Images.detail_icon}
                            resizeMode='contain'
                            style={{ width: 20, height: 25,}}
                        />
                    </TouchableOpacity>
                </View>

                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', margin: 16 }}>
                    <CustomButton
                        name={'Consulta regolamento'}
                        buttonStyle={{ width: '45%', backgroundColor: Colors.lightBluePink, justifyContent: 'flex-start' }}
                        leftIconImage={Images.notification_icon}
                        textStytle={{ fontSize: 18}}
                    />
                    <CustomButton
                        name={'Disattiva notifiche'}
                        buttonStyle={{ width: '45%', backgroundColor: Colors.pinkBarColor, justifyContent: 'flex-end', }}
                        rightIconImage={Images.notification_icon}
                        textStytle={{ fontSize: 18 }}
                    />
                </View>

            </ScrollView>
        </SafeAreaView >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.task1BackgroundColor,
    },
    greeting: {
        fontSize: 24,
        // margin: 16,
        fontWeight: 'bold',
        color: Colors.whiteText,
        textAlign: 'left'
    },
    heading1: {
        fontSize: 14,
        color: Colors.whiteText,
        fontWeight: '500'
    },
    normalText: {
        fontSize: 16,
        color: Colors.whiteText,
        fontWeight: '400'
    },
    discoverText: {
        fontSize: 16,
        color: Colors.discoverText,
        fontWeight: '500',
        textAlignVertical: 'center',
        paddingHorizontal: 4
    },
    nameText: {
        fontSize: 18,
        color: Colors.whiteText,
        fontWeight: 'bold'
    },
    namePinkText: {
        fontSize: 16,
        color: Colors.lightPinkText,
        fontWeight: 'bold'
    },
    liveText: {
        fontSize: 14,
        color: Colors.whiteText,
        fontWeight: '500'
    },
    backgroundImageStyle: {
        width: '100%',
        height: '100%',
        // borderWidth:2,
        // borderColor:'white',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    gradientButtonContainer: {
        width: '50%',
        height: '35%',
        alignItems: 'center',
        // borderWidth: 1,
        justifyContent: 'center',
        borderRadius: 16,
    },
    pointsContainer: {
        flexDirection: 'row',
        height: screenHeight * 0.2,
        // borderWidth: 1, 
        // borderColor: 'white', 
        alignItems: 'center',
        justifyContent: 'center'
    },
    pointsItemContainer: {
        width: '40%',
        height: '90%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    progressContainer: {
        height: screenHeight * 0.26,
        // borderWidth: 1, 
        // borderColor: 'white', 
        alignItems: 'center',
        justifyContent: 'center',
    },
    dropsContainer: {
        height: screenHeight * 0.28,
        borderWidth: 1, 
        // borderColor: 'white', 
        // alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16
    },
    exclusiveContainer: {
        width: '80%',
        borderRadius: 6,
        alignItems: 'center',
        backgroundColor: Colors.task1BackgroundColor,
        padding: 4
    },
    horizontalLine: {
        backgroundColor: Colors.pinkBarColor,
        padding: 2,
        borderRadius: 2,
        width: '12%'
    },
    dropsFirstContainer: {
        // width: '60%', 
        flex: 1,
        height: '100%',
        padding: 16,
        marginRight: -16,
        justifyContent: 'space-between'
    },
    statusContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'red',
        width: '45%',
        marginHorizontal: 8,
        marginTop: 12,
        borderRadius: 6
    },
    statusPoint: {
        height: 5,
        padding: 4,
        backgroundColor: Colors.whiteText,
        borderRadius: 4,
        marginHorizontal: 4
    },
});

export default SeasonScreen;
