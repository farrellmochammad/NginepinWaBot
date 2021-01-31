import PlaceholderApi from '../repositories/PlaceholderApi';


class Parser {

    async stringSplit(message){
        var parser = message.split(' ');

        if (parser.length == 2){
            switch (parser[0].toLowerCase()){
                case '/post':
                    await PlaceholderApi.getPosts().then(titles => {
                        console.log("Harus awall");
                        return titles;
                      })();
                case '/comment':
                    console.log('comment');
                    return 'comment';
                default: 
                    console.log('invalid')
                    break;                
            }
            
        }

        if (parser.length == 1){
            return 'pass';
        }
            
    }

    
}

export default Parser;