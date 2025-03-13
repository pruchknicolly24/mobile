import { Image, StyleSheet } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      style={styles.container} 
      headerBackgroundColor={{ light: '#F5A9B8', dark: '#F5A9B8' }} 
      headerImage={null} 
    >
      <ThemedView style={styles.imageContainer}>
        <Image
          source={require('@/assets/images/unnamed.png')} 
          style={styles.smallImage}
        />
      </ThemedView>

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">BEM VINDOS!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Sobre mim</ThemedText>
        <ThemedText>
          Me chamo Nicolly, Tenho 17 anos e estou me aprimorando na programação. Estou focada em melhorar minhas habilidades e crescer na área!
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Meu Caminho no Desenvolvimento</ThemedText>
        <ThemedText>
          Atualmente, estou me dedicando a entender como as coisas funcionam por trás das telas. Tenho explorado JavaScript, React Native e outras ferramentas. Não é fácil, mas o processo tem sido bem legal! 
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">O Que Me Desafia</ThemedText>
        <ThemedText>
          A programação é cheia de desafios, mas é isso que me faz crescer. Cada erro é uma chance de aprender e cada conquista, por menor que seja, vale a pena.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5A9B8',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  imageContainer: {
    marginTop: -20, 
    alignItems: 'center', 
  },
  smallImage: {
    width: 120,
    height: 120, 
    borderRadius: 60, 
    marginBottom: 10, 
  },
});
