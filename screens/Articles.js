//galio
import { Block, Text, theme } from "galio-framework";
import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
//argon
import { Images, argonTheme, articles } from "../constants/";

import { Card } from "../components/";
import React from "react";

const { width } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;
const cardWidth = width - theme.SIZES.BASE * 2;
const categories = [
  {
    title: "Día de la mujer",
    description:
      "Eventos Para Restrepo Valle Dia De La Mujer",
    image:
      "https://totalreporter.com/wp-content/uploads/2022/02/Imagenes-del-dia-de-la-mujer-2022.jpg",
    price: "8 De Marzo de 2023 ",
  },
  {
    title: "Día de la madre",
    description:
      "Otro Evento Para Restrepo Valle",
    image:
      "https://www.conmishijos.com/uploads/diamadre-p.jpg",
    price: "10 De Mayo De 2023",
  },
  {
    title: "Día de la mujer",
    description:
      "Eventos Para Restrepo Valle Dia De La Mujer",
    image:
      "https://totalreporter.com/wp-content/uploads/2022/02/Imagenes-del-dia-de-la-mujer-2022.jpg",
    price: "8 De Marzo de 2023 ",
  },
  {
    title: "Día de la madre",
    description:
      "Otro Evento Para Restrepo Valle",
    image:
      "https://www.conmishijos.com/uploads/diamadre-p.jpg",
    price: "10 De Mayo De 2023",
  },
  {
    title: "Día de la mujer",
    description:
      "Eventos Para Restrepo Valle Dia De La Mujer",
    image:
      "https://totalreporter.com/wp-content/uploads/2022/02/Imagenes-del-dia-de-la-mujer-2022.jpg",
    price: "8 De Marzo de 2023 ",
  },
  {
    title: "Día de la madre",
    description:
      "Otro Evento Para Restrepo Valle",
    image:
      "https://www.conmishijos.com/uploads/diamadre-p.jpg",
    price: "10 De Mayo De 2023",
  },
];

class Articles extends React.Component {
  renderProduct = (item, index) => {
    const { navigation } = this.props;

    return (
      <TouchableWithoutFeedback
        style={{ zIndex: 3 }}
        key={`product-${item.title}`}
        onPress={() => navigation.navigate("Pro", { product: item })}
      >
        <Block center style={styles.productItem}>
          <Image
            resizeMode="cover"
            style={styles.productImage}
            source={{ uri: item.image }}
          />
          <Block center style={{ paddingHorizontal: theme.SIZES.BASE }}>
            <Text
              center
              size={16}
              color={theme.COLORS.MUTED}
              style={styles.productPrice}
            >
              {item.price}
            </Text>
            <Text center size={34}>
              {item.title}
            </Text>
            <Text
              center
              size={16}
              color={theme.COLORS.MUTED}
              style={styles.productDescription}
            >
              {item.description}
            </Text>
          </Block>
        </Block>
      </TouchableWithoutFeedback>
    );
  };

renderCards = () => {
    return (
      <Block flex style={styles.group}>
        <Text bold size={16} style={styles.title}>
          Eventos
        </Text>
          <Block flex style={{ marginTop: theme.SIZES.BASE / 2 }}>
            <ScrollView
              horizontal={true}
              pagingEnabled={true}
              decelerationRate={0}
              scrollEventThrottle={16}
              snapToAlignment="center"
              showsHorizontalScrollIndicator={false}
              snapToInterval={cardWidth + theme.SIZES.BASE * 0.375}
              contentContainerStyle={{
                paddingHorizontal: theme.SIZES.BASE / 2,
              }}
            >
              {categories &&
                categories.map((item, index) =>
                  this.renderProduct(item, index)
                )}
            </ScrollView>
          </Block>
        </Block>
      
    );
  };


  renderAlbum = () => {
    const { navigation } = this.props;

    return (
      <Block
        flex
        style={[styles.group, { paddingBottom: theme.SIZES.BASE * 5 }]}
      >
        <Text bold size={16} style={styles.title}>
          Nuestras Marcas
        </Text>
        <Block style={{ marginHorizontal: theme.SIZES.BASE * 2 }}>
          <Block
            row
            space="between"
            style={{ marginTop: theme.SIZES.BASE, flexWrap: "wrap" }}
          >
            {Images.ProfilePicture.map((img, index) => (
              <Block key={`viewed-${img}`} style={styles.shadow}>
                <Image
                  resizeMode="cover"
                  source={{ uri: img }}
                  style={styles.albumThumb}
                />
              </Block>
            ))}
          </Block>
        </Block>
      </Block>
    );
  };

  render() {
    return (
      <Block flex center>
        <ScrollView showsVerticalScrollIndicator={false}>
          {this.renderCards()}
          {this.renderAlbum()}
        </ScrollView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    paddingBottom: theme.SIZES.BASE,
    paddingHorizontal: theme.SIZES.BASE * 2,
    marginTop: 22,
    color: argonTheme.COLORS.HEADER,
  },
  group: {
    paddingTop: theme.SIZES.BASE,
  },
  albumThumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: "center",
    width: thumbMeasure,
    height: thumbMeasure,
  },
  category: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE / 2,
    borderWidth: 0,
  },
  categoryTitle: {
    height: "100%",
    paddingHorizontal: theme.SIZES.BASE,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  imageBlock: {
    overflow: "hidden",
    borderRadius: 4,
  },
  productItem: {
    width: cardWidth - theme.SIZES.BASE * 2,
    marginHorizontal: theme.SIZES.BASE,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 7 },
    shadowRadius: 10,
    shadowOpacity: 0.2,
  },
  productImage: {
    width: cardWidth - theme.SIZES.BASE,
    height: cardWidth - theme.SIZES.BASE,
    borderRadius: 3,
  },
  productPrice: {
    paddingTop: theme.SIZES.BASE,
    paddingBottom: theme.SIZES.BASE / 2,
  },
  productDescription: {
    paddingTop: theme.SIZES.BASE,
    // paddingBottom: theme.SIZES.BASE * 2,
  },
});

export default Articles;
