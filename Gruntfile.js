module.exports = function (grunt) {

  // Import dependencies
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-ts');
  grunt.loadNpmTasks('grunt-run');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: ["build/"],
    copy: {
      src: {
        expand: true,
        cwd: 'src/',
        src: ['**/*.js', '**/*.css', '**/*.html'],
        dest: 'build/',
        filter: 'isFile'
      }
    },
    ts: {
      src: {
        src: ['src/**/*.ts'],
        exclude: ['src/typings/**/*'],
        //out: 'build/PROJECT.js',
        outDir: 'build/',
        options: {
          target: 'es5',
          sourceMaps: true,
          declaration: true,
          removeComments: false,
          module: 'commonjs'
        }
      }
    },
    run: {
      src: {
        args: ['./build/index.js'],
        options: {
        }
      }
    }
    // mochaTest: {
    //   ut: {
    //     src: ['build/server/test/unit/**/*.js']
    //   }
  });

  // Register the default tasks to run when you run grunt
  grunt.registerTask('default', 'go');
  grunt.registerTask('build', ['ts:src', 'copy:src']);
  grunt.registerTask('go', ['build', 'run:src']);
}