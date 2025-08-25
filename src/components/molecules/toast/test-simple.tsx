import React from 'react';
import { View, Pressable, Text } from 'react-native';
import { LucideIcon } from '@/components/atoms';
import { ToastService } from './toast-provider';

const SimpleToastTest = () => {
  const testBasicIcons = () => {
    console.log('Testing basic icons...');
  };

  return (
    <View style={{ padding: 20, gap: 10 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
        Icon Tests
      </Text>
      
      {/* Test individual icons */}
      <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
        <Text>CheckCircle:</Text>
        <LucideIcon testId="test-check" name="CheckCircle" size={24} color="green" />
      </View>
      
      <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
        <Text>XCircle:</Text>
        <LucideIcon testId="test-x" name="XCircle" size={24} color="red" />
      </View>
      
      <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
        <Text>Info:</Text>
        <LucideIcon testId="test-info" name="Info" size={24} color="blue" />
      </View>
      
      <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
        <Text>AlertTriangle:</Text>
        <LucideIcon testId="test-warning" name="AlertTriangle" size={24} color="orange" />
      </View>

      <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
        <Text>X (close):</Text>
        <LucideIcon testId="test-close" name="X" size={24} color="black" />
      </View>

      <Pressable
        style={{
          backgroundColor: '#007bff',
          padding: 10,
          borderRadius: 5,
          marginTop: 20,
        }}
        onPress={() => {
          console.log('Testing simple success toast...');
          ToastService.success('Simple test message');
        }}>
        <Text style={{ color: 'white', textAlign: 'center' }}>
          Test Simple Toast
        </Text>
      </Pressable>
    </View>
  );
};

export default SimpleToastTest;
