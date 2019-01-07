import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text
} from 'react-native';

export default class ButtonScreen extends Component {
  _onPress = () => {

  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
          <Text style={{fontSize: 20, fontWeight: '700'}}>
            {"<Button>"}
          </Text>
        </View>
        <View style={styles.itemGroup}>
          <View style={styles.textContainer}>
            <Text style={styles.textHeading}>
              Simple Button
            </Text>
            <Text style={styles.textDetail}>
              The title and onPress handler are required. It is recommended to set accessibilityLabel to make your app usable by everyone.
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              onPress={this._onPress}
              title="Press Me"
              accessibilityLabel="Learn more about this button"
              />
          </View>
        </View>

        <View style={{height: 8}}></View>

        <View style={styles.itemGroup}>
          <View style={styles.textContainer}>
            <Text style={styles.textHeading}>
              Adjusted Color
            </Text>
            <Text style={styles.textDetail}>
              Adjusts the color in a way that looks standard on each platform. On iOS the color prop controls the color of the text. On Android, the color adjusts the background color of the button.
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              onPress={this._onPress}
              title="Press purple"
              color="#841584"
              accessibilityLabel="Learn more about this button"
              />
          </View>
        </View>

        <View style={{height: 8}}></View>

        <View style={styles.itemGroup}>
          <View style={styles.textContainer}>
            <Text style={styles.textHeading}>
              Fit to text layout
            </Text>
            <Text style={styles.textDetail}>
              This layout strategy lets the title define the width of the button
            </Text>
          </View>
          <View style={[styles.buttonContainer, {flexDirection: 'row'}]}>
            <Button
              onPress={this._onPress}
              title="This looks great!"
              accessibilityLabel="Learn more about this button"
              />
              <View style={{flex: 1}}></View>
              <Button
                onPress={this._onPress}
                title="Ok!"
                color="#841584"
                accessibilityLabel="Learn more about this button"
                />
          </View>
        </View>

        <View style={{height: 8}}></View>

        <View style={styles.itemGroup}>
          <View style={styles.textContainer}>
            <Text style={styles.textHeading}>
              Disabled Button
            </Text>
            <Text style={styles.textDetail}>
              All interactions for the component are disabled.
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              onPress={this._onPress}
              title="I Am Disabled"
              color="#841584"
              accessibilityLabel="Learn more about this button"
              disabled={true}
              />
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(233, 234, 237, 1)',
    paddingHorizontal: 10
  },
  navBar: {
    paddingTop: 20,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemGroup: {
    backgroundColor: 'rgba(246, 247, 248, 1)',
    borderRadius: 3,
    overflow: 'hidden'
  },
  textContainer: {
    paddingVertical: 6,
    paddingHorizontal: 6
  },
  textHeading: {
    fontSize: 12,
    fontWeight: '700'
  },
  textDetail: {
    fontSize: 12,
    marginTop: 4
  },
  buttonContainer: {
    padding: 10,
    backgroundColor: '#FFFFFF',
  }
});
