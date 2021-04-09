import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View, Switch } from 'react-native';
import { Icon } from 'react-native-elements';

const App = () => {
  const [isEnabledHight, setIsEnabledHight] = useState(false);
  const toggleSwitchHight = () => setIsEnabledHight(previousState => !previousState);

  const [isEnabledMedium, setIsEnabledMedium] = useState(false);
  const toggleSwitchMedium = () => setIsEnabledMedium(previousState => !previousState)

  const [isEnabledLow, setIsEnabledLow] = useState(false);
  const toggleSwitchLow = () => setIsEnabledLow(previousState => !previousState)

  const [isEnabledSleep, setIsEnabledSleep] = useState(false);
  const toggleSwitchSleep = () => setIsEnabledSleep(previousState => !previousState)
  
  const shadowStyle={
    shadowColor: "#2b2b2b",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.25,
    shadowRadius: 16.00,

    elevation: 24,
  }

  return (
    <View style={styles.container}>
      <View style={styles.header_container}>
        <View style={styles.title_container}>
          <Text style={styles.title}>Settings</Text>
          <Icon name='more-horizontal' type='feather' color='#dbdbdb' size={35} /> 
        </View>
        <View style={styles.title_container}>
          <Text style={styles.text}>Please select your risk profile</Text>
          <Icon name='fingerprint' type='material' color='#dbdbdb' size={35}/>
        </View>
      </View>
      
      <View style={styles.main_container}>
        <View style={styles.risk_container}>
          <View style={[styles.risk_item, shadowStyle]}>
            <View>
              <View style={styles.risk_title_container}>
                <Text style={styles.risk_title}>High</Text>
                <Text style={styles.risk_loss_text}>Stop Loss -10%</Text>
              </View>
              <View style={styles.risk_content}>
                <Text style={styles.content_text}>AVG Monthly Profit:</Text>
                <Text style={styles.content_pourcentage_plus}>+12,69%</Text>
              </View>
              <View style={styles.risk_content}>
                <Text style={styles.content_text}>Last week Performance:</Text>
                <Text style={styles.content_pourcentage_plus}>+1,57%</Text>
              </View>
            </View>
            <Switch
              trackColor={{ false: "#495466", true: "#d97b29" }}
              thumbColor={isEnabledHight ?  "#495466" : "#495466"}
              onValueChange={toggleSwitchHight}
              value={isEnabledHight}
              style={styles.switch}
            />
          </View>
          <View style={[styles.risk_item, shadowStyle]}>
            <View>
              <View style={styles.risk_title_container}>
                <Text style={styles.risk_title}>Medium</Text>
                <Text style={styles.risk_loss_text}>Stop Loss -5%</Text>
              </View>
              <View style={styles.risk_content}>
                <Text style={styles.content_text}>AVG Monthly Profit:</Text>
                <Text style={styles.content_pourcentage_plus}>+11,45%</Text>
              </View>
              <View style={styles.risk_content}>
                <Text style={styles.content_text}>Last week Performance:</Text>
                <Text style={styles.content_pourcentage_less}>-0,45%</Text>
              </View>
            </View>
            <Switch
              trackColor={{ false: "#495466", true: "#d97b29" }}
              thumbColor={isEnabledMedium ?  "#495466" : "#495466"}
              onValueChange={toggleSwitchMedium}
              value={isEnabledMedium}
              style={styles.switch}
            />
          </View>
          <View style={[styles.risk_item, shadowStyle]}>
            <View>
              <View style={styles.risk_title_container}>
                <Text style={styles.risk_title}>Low</Text>
                <Text style={styles.risk_loss_text}>Stop Loss -2%</Text>
              </View>
              <View style={styles.risk_content}>
                <Text style={styles.content_text}>AVG Monthly Profit:</Text>
                <Text style={styles.content_pourcentage_plus}>+7,62%</Text>
              </View>
              <View style={styles.risk_content}>
                <Text style={styles.content_text}>Last week Performance:</Text>
                <Text style={styles.content_pourcentage_less}>-0,02%</Text>
              </View>
            </View>
            <Switch
              trackColor={{ false: "#495466", true: "#d97b29" }}
              thumbColor={isEnabledLow ?  "#495466" : "#495466"}
              onValueChange={toggleSwitchLow}
              value={isEnabledLow}
              style={styles.switch}
            />
          </View>
        </View>
        <View style={[styles.risk_item, shadowStyle]}>
          <View>
            <Text style={styles.risk_title}>Earn while sleeping</Text>
            <Text style={styles.content_text}>Let Warren trade at night (23:00-7:00)</Text>
          </View>
          <Switch
              trackColor={{ false: "#495466", true: "#d97b29" }}
              thumbColor={isEnabledSleep ?  "#495466" : "#495466"}
              onValueChange={toggleSwitchSleep}
              value={isEnabledSleep}
              style={styles.switch}
            />
        </View>
      </View>

      <View style={styles.menu}>
        <View style={[styles.main_menu_container, shadowStyle]}>
            <TouchableOpacity style={styles.secondary_button}>
              <Icon name='bar-chart-2' type='feather' color='#dbdbdb' size={30}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.home_button}>
              <Icon name='home' type='material-community' color='#dbdbdb' size={30}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.secondary_button}>
              <Icon name='currency-btc' type='material-community' color='#dbdbdb' size={30}/>
            </TouchableOpacity>
          </View>
          <View style={[styles.secondary_menu_container, shadowStyle]}>
            <TouchableOpacity style={styles.secondary_button}>
              <Icon name='notifications-none' type='material-icons' color='#dbdbdb' size={30}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.secondary_button}>
              <Icon name='settings' type='material-icons' color='#dbdbdb' size={30}/>
            </TouchableOpacity>
          </View>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#495466',
  },
  header_container: {
    marginTop: 20,
    marginLeft: '10%',
    marginRight: '5%'
  },
  title_container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  title: {
    color: '#dbdbdb',
    fontSize: 30
  },
  text:{
    color: '#dbdbdb',
    fontSize: 14,
    alignSelf: 'center'
  },
  main_container: {
    flex: 2,
    width: '80%',
    alignSelf: 'center',
    justifyContent: 'space-around'
  },
  risk_container: {
    
  },
  risk_item: {
    backgroundColor: '#414b5c',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
    marginTop: 10,
    padding: 18
    
  },
  switch: {
    borderWidth: 2,
    borderColor: "#495466",
    borderRadius: 15,
    alignSelf: 'center',
    shadowColor: "#666d7a",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    elevation: 24,
  },
  risk_title_container: {
    flexDirection: 'row',
    alignItems: 'baseline'
  },
  risk_title: {
    color: '#dbdbdb',
    fontSize: 22
  },
  risk_loss_text: {
    color: '#a8aaad',
    fontSize: 10,
    marginLeft: 10
  },
  risk_content: {
    flexDirection: 'row',
    alignItems: 'baseline'
  },
  content_text: {
    color: '#a8aaad',
    fontSize: 8,
  },
  content_pourcentage_plus: {
    color: '#6effcf',
    fontSize: 8,
    marginLeft: 10
  },
  content_pourcentage_less: {
    color: '#ff0000',
    fontSize: 8,
    marginLeft: 10
  },
  menu: {
    marginTop: 'auto'
  },
  main_menu_container :{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 40,
  },
  secondary_menu_container :{
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    left: 10,
    right: 10,
    bottom: 10

  },
  home_button: {
    borderRadius: 100,
    justifyContent: 'center',
    width: 80,
    height: 80,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#39414f'
  },
  secondary_button: {
    borderRadius: 100,
    justifyContent: 'center',
    width: 60,
    height: 60,
    backgroundColor: '#39414f',
  }
});


export default App;