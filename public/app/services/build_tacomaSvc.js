angular.module('toyota').service('buildTacomaSvc', function($http){

const devUrl = 'http://localhost:3000'
const service = this
// build tacoma 
this.tacomagrades = () => {
    return $http.get(devUrl + '/tacomagrades').then( (res) => {
        service.tacgrades = res.data
        return res.data
    })

} 
this.trdcabsbeds = () => {
    return $http.get(devUrl + '/tacomacabsbeds')

} 
this.trdconfiguration = () => {
    return $http.get(devUrl + '/tacomaconfiguration')

} 
this.trdcolors = () => {
    return $http.get(devUrl + '/trdcolors').then( (res) => {
        service.colors = res.data
        return res.data
    })
} 
this.trdpackages = () => {
    return $http.get(devUrl + '/tacomapackages')

} 

this.TRDaccessories = () => {
    return $http.get(devUrl + '/TRDaccessories')

} 



// cart or summary
this.addToSummary = function(product) {
    console.log(`Adding ${product} to cart`)
    return $http.post('/summary', product)
  }

  this.getSummary = function() {
      console.log("hello there pal")
    return $http.get('/summary').then( (res) => {
        console.log(res.data)
        return res
    })
  }

var photos = [{
                src: '../../app/images/build-tacoma-home/sr-1.png',
                title: 'Pic 1'
            }, {
                src: '../../app/images/build-tacoma-home/sr-2.png',
                title: 'Pic 2'
            }, {
                src: '../../app/images/build-tacoma-home/sr-3.png',
                title: 'Pic 3'
            }, {
                src: '../../app/images/build-tacoma-home/sr-4.png',
                title: 'Pic 4'
            }, {
                src: '../../app/images/build-tacoma-home/sr-5.png',
                title: 'Pic 5'
            },
             {
                src: '../../app/images/build-tacoma-home/sr-6-interior1.png',
                title: 'Pic 6'
            }, {
                src: '../../app/images/build-tacoma-home/sr-7-interior2.png',
                title: 'Pic 7'
            }, {
                src: '../../app/images/build-tacoma-home/sr-8-interior3.png',
                title: 'Pic 8'
            }];
        // service.photos= {}
service.photos = photos;
//endpoint that is getting new photos based on what truck you clicked..... .then((res) => {
    // service.photos = res.data pass id with it in abackend
// })
this.getTRDphotos = (id) => {
    $http.get(devUrl + '/getTRDphotos/' + id).then( (res)=> {
        service.photos = res.data
        console.log(service.photos);
       
        return service.photos
    })

} 


})