module.exports = {
    async afterCreate(event) {
      const { result } = event;
      try {
        await strapi.plugins['email'].services.email.send({
          to: 'your_email@address.com',
          from: `your_email@address.com`,
          subject: `This is a test mail`,
          html: `Hello world ${result.name}` //<- (you'll need a name field in strapi collection type to display this data)
        });
      } catch (err) {
        console.log(err);
      }
    },
  };