import React, { Component, useState, useEffect } from 'react'
import { Animated, Platform, StyleSheet, View, Easing, Text } from 'react-native';
import { List, Card, Title, Paragraph } from 'react-native-paper';
import { CardStyleInterpolators } from '@react-navigation/stack';

import { IP } from '../credentials'
import { useNavigation, useRoute } from '@react-navigation/native';

import { Dimensions, PixelRatio } from 'react-native';

import { connect } from 'react-redux';

import { MaterialIcons, Icons } from '../components/Icon'

function title (route) {
}
const out = {
    title,
}

export default out;