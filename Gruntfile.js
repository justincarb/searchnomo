module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      css: {
        files: [
          'assets/stylesheets/sass/*.sass',
          'assets/stylesheets/sass/*.scss'
        ],
        tasks: ['compass']
      },
      scripts: {
         files: ['assets/js/*.js'],
         tasks: ['uglify']
       }
    },
    compass: {
      dist: {
        options: {
          sassDir: 'assets/stylesheets/sass',
          cssDir: 'assets/stylesheets/css',
          outputStyle: 'compressed'
        }
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: ['Gruntfile.js', 'assets/js/*.js']
    },
    uglify: {
      options: {
        compress: {
          drop_console: true
        }
      },
      my_target: {
        files: {
          'assets/js/script.min.js': ['assets/js/script.js']
        }
      }
    }
  });

  // Load the Grunt plugins.
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Register the default tasks.
  grunt.registerTask('default', ['watch']);
};
