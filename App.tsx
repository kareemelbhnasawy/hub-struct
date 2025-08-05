
import "./src/style/global.css"
import './src/localization';
import {
  Pressable,
  Text,
  View,
} from 'react-native';
import { useTheme } from "./src/hooks/useTheme";
import BaseText from "./src/components/atoms/base-text/base-text.component";
import { useTranslate } from "./src/hooks/useTranslate";
import BaseInput from "./src/components/atoms/base-input/base-input.component";
import { useRef, useState } from "react";
import Form from "./src/components/atoms/form/form.component";
import { FormikProps, FormikValues } from "formik";

function App() {
  const { toggleTheme } = useTheme();
  const { changeLanguage, locale } = useTranslate();
  const [text, setText] = useState("");
  const formRef = useRef<FormikProps<FormikValues>>(null);
  return (
    <View className="mt-96 bg-white dark:bg-black">
      <BaseText text="common.welcome" textProps={{name:"hamada"}} className="text-red-300 dark:text-primary">
      {" "}<BaseText text="common.welcome common.obj.obj1" textProps={{name:"hamada"}} className="underline"> salwa</BaseText>
      </BaseText>
      <BaseInput value={text} onChangeText={setText} errorProps={{text:"common.welcome", textProps:{name:"hamada"}}}/>
      <Form
        ref={formRef}
      
        fields={[{
          name: 'oldPassword',
          testId: 'old-password-input',
        }, {
          name: 'oldPassword',
          testId: 'old-password-input',
        }]}
        validateOnChange
        removeSubmitBtn
        onSubmit={() => {}}
        initialValues={{
          password: '',
          confirmPassword: '',
        }}
      />
      <Pressable onPress={toggleTheme} className="mt-4 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded">
        <Text className="text-light-text dark:text-white">Toggle Theme</Text>
      </Pressable>
      <Pressable onPress={()=>changeLanguage(locale ==='ar'?'en':'ar')} className="mt-4 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded">
        <Text className="text-light-text dark:text-white">Toggle Lang</Text>
      </Pressable>
    </View>
  );
}

export default App;
