import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';


export default function Sobre() {
  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [idade, setIdade] = useState('');
  const [registro, setRegistro] = useState('');
  const [sexo, setSexo] = useState('');
  const [corPele, setCorPele] = useState('');
  const [naturalidade, setNaturalidade] = useState('');
  const [residencia, setResidencia] = useState('');
  const [procedencia, setProcedencia] = useState('');
  const [dataInternacao, setDataInternacao] = useState('');
  const [showDetails, setShowDetails] = useState(false);

  const handleSubmit = () => {
    // Aqui você pode adicionar a lógica para enviar o formulário
    // para o servidor ou fazer o que desejar com os dados do formulário.
    console.log({
      nome,
      dataNascimento,
      idade,
      registro,
      sexo,
      corPele,
      naturalidade,
      residencia,
      procedencia,
      dataInternacao,
    });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
      <Button
      title={showDetails ? 'Formulario Simples' : 'Formulario Detalhado'}
      onPress={() => setShowDetails(!showDetails)}
    />
        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={setNome}
          placeholder="Digite o nome completo"
        />

        <Text style={styles.label}>Data de nascimento</Text>
        <TextInput
          style={styles.input}
          value={dataNascimento}
          onChangeText={setDataNascimento}
          placeholder="DD/MM/AAAA"
        />

        <Text style={styles.label}>Idade</Text>
        <TextInput
          style={styles.input}
          value={idade}
          onChangeText={setIdade}
          keyboardType="numeric"
        />

        <Text style={styles.label}>Registro</Text>
        <TextInput
          style={styles.input}
          value={registro}
          onChangeText={setRegistro}
          keyboardType="numeric"
        />

        <Text style={styles.label}>Sexo</Text>
        <TextInput
          style={styles.input}
          value={sexo}
          onChangeText={setSexo}
          placeholder="Homem, mulher ou outro"
        />

        <Text style={styles.label}>Cor da pele</Text>
        <Picker
          selectedValue={corPele}
          onValueChange={(itemValue) => setCorPele(itemValue)}
          style={{ width: 200, borderWidth: 1 }}
        >
          <Picker.Item label="Branco" value="branco" />
          <Picker.Item label="Preto" value="preto" />
          <Picker.Item label="Pardo" value="pardo" />
          <Picker.Item label="Amarelo" value="amarelo" />
          <Picker.Item label="Indígena" value="indigena" />
        </Picker>

        {showDetails && (
          <>
            <Text style={styles.label}>Naturalidade</Text>
            <TextInput
              style={styles.input}
              value={naturalidade}
              onChangeText={setNaturalidade}
            />
                    <Text style={styles.label}>Procedência</Text>
        <TextInput
          style={styles.input}
          value={procedencia}
          onChangeText={setProcedencia}
        />

        <Text style={styles.label}>Data de internação</Text>
        <TextInput
          style={styles.input}
          value={dataInternacao}
          onChangeText={setDataInternacao}
          placeholder="DD/MM/AAAA"
        />
      </>
    )}

    <Button title="Enviar" onPress={handleSubmit} />
  </View>
</ScrollView>
);
}

const styles = StyleSheet.create({
container: {
padding: 20,
},
label: {
fontSize: 16,
marginBottom: 5,
},
input: {
borderWidth: 1,
borderColor: '#ddd',
padding: 10,
marginBottom: 15,
borderRadius: 5,
fontSize: 16,
},
});