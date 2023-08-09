const { ccclass, property } = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello aaaa';

    // logoNode: cc.Node;
    logo: cc.Sprite = null;
   
    spin: cc.Node;

    static imageList: { name: string; spriteFrame: cc.SpriteFrame }[] = [];

    constructor() {
      super();
      // this.logoNode = new cc.Node;
      this.logo = new cc.Sprite();

      this.loadAssetsList();
    }

    start() {  
//      this.setImageToButton("btnImage/bgSelectBall");
//      this.setButtonImage();
//      this.setImage();
      this.setImagewithStatic();
//        this.LoadImage();
//        this.onLoadSpine();
    }

    onLoad() {
      // this.LoadImage();
      // this.onLoadSpine();
    }

    loadAssetsList() {

      cc.loader.loadResDir("images", cc.SpriteFrame, (err, spriteFrames) => {
        if (err) {
            cc.error("Error loading images:", err);
            return;
        }

        // Store images along with their file names
        Helloworld.imageList = spriteFrames.map((spriteFrame) => {
            return { name: spriteFrame.name, spriteFrame };
        });

        cc.log("Images loaded and stored in static variable");
      });
    }

    setImagewithStatic() {
      var self = this;
      const imageName = "1";
      const loadedImage = Helloworld.imageList.find((image) => image.name === imageName);

      var logoNode = new cc.Node();
      const logoSprite = logoNode.addComponent(cc.Sprite);
      logoSprite.spriteFrame = loadedImage.spriteFrame;;
      self.node.addChild(logoNode);
    }

    setImage() {
      var self = this;
      cc.resources.load('btnImage/bgSelectBall', cc.SpriteFrame, function (err, spriteFrame) {
        if (err) {
          console.error(err);
          return;
        }
        spriteFrame.addRef();

        var logoNode = new cc.Node();
        const logoSprite = logoNode.addComponent(cc.Sprite);
        logoSprite.spriteFrame = spriteFrame;
        self.node.addChild(logoNode);
          
          // self.logo.spriteFrame = spriteFrame;
          // console.log(self.label.node.getPosition);
          // self.logo.node.position = new cc.Vec3(0,0,0);    
          // self.node.addChild(self.logo.node);
      });
    }

    // setImage() {
    //   var self = this;
    //   cc.resources.load('btnImage/bgSelectBall', cc.SpriteFrame, function (err, spriteFrame) {
    //     if (err) {
    //       console.error(err);
    //       return;
    //     }
    //     spriteFrame.addRef();
    //     if (self.logo) {
    //       self.logoNode.addComponent(cc.Sprite);
    //       self.logoNode.getComponent(cc.Sprite).spriteFrame = spriteFrame;
    //       self.node.addChild(self.logoNode);

    //       // self.logo.spriteFrame = spriteFrame;
    //       // console.log(self.label.node.getPosition);
    //       // self.logo.node.position = new cc.Vec3(0,0,0);    
    //       // self.node.addChild(self.logo.node);
    //     } else {
    //       console.error("Logo object is null or undefined");
    //     }
    //   });
    // }

    hideImage() {
      this.logo.node.active = false;
    }

    setImageToButton(imagePath: string) {
// Create a button node
        const buttonNode = new cc.Node("DynamicButton");
        this.node.addChild(buttonNode);

        // Add a button component to the button node
        const buttonComponent = buttonNode.addComponent(cc.Button);
        buttonComponent.transition = cc.Button.Transition.SCALE;


        // Add a sprite component to the button node to display the image
        const spriteComponent = buttonNode.addComponent(cc.Sprite);

        cc.resources.load("btnImage/bgSelectBall", cc.SpriteFrame, function (err, spriteFrame) {
          spriteComponent.spriteFrame = spriteFrame;
      });

        // Optionally, you can set the position, size, and other properties of the buttonNode
        // buttonNode.setPosition(cc.v2(100, 100));
        // buttonNode.setContentSize(cc.size(200, 100));
    }

    LoadImage() {

      var self = this;
      cc.resources.load("btnImage/bgSelectBall", cc.SpriteFrame, function (err, spriteFrame) {
        self.logo.spriteFrame = spriteFrame;
    });



      // var self = this;
      // cc.resources.load("btnImage/bgSelectBall", cc.SpriteFrame, function (err, spriteFrame) {
      //   self.logo.spriteFrame = spriteFrame;
      // });

      // cc.loader.loadRes('btnImage/bgSelectBall', cc.SpriteFrame, (err, spriteFrame) => {
      //   if (!err) {
      //     this.logo.spriteFrame = new cc.SpriteFrame(spriteFrame);
      //   } else {
      //     // Log the specific error message for debugging
      //     cc.warn("Failed to load sprite frame:", err.message);
      //   }
      // });
    }

    // setButtonImage() {
    //   var self = this;

    //      // Example usage:
    //      const buttonNode = new cc.Node('Button');
    //      const button = buttonNode.addComponent(cc.Button);  
   
    //      // Create a sprite frame using the image path
    //      cc.resources.load('btnImage/bgSelectBall', cc.SpriteFrame, function (err, spriteFrame) {
    //       if (err) {
    //         console.error(err);
    //         return;
    //       }
    //       spriteFrame.addRef();
    //       button.normalSprite = spriteFrame;
    //       buttonNode.setPosition(new cc.Vec3(0,0,0));
    //       self.node.addChild(buttonNode);
    //     });
    // }

    // setButtonImage() {
    //   var self = this;
    
    //   // Example usage:
    //   const buttonNode = new cc.Node('Button');
    //   const button = buttonNode.addComponent(cc.Button);
    
    //   // Create a sprite frame using the image path
    //   cc.resources.load('btnImage/bgSelectBall', cc.SpriteFrame, (err, spriteFrame) => {
    //     if (err) {
    //       console.error(err);
    //       return;
    //     }
    //     spriteFrame.addRef();
    //     button.normalSprite = spriteFrame;
    //     button.hoverSprite = spriteFrame;
    //     button.pressedSprite = spriteFrame;

    //     buttonNode.setPosition(new cc.Vec3(0, 0, 0));
    //     self.node.addChild(buttonNode);
    //   });
    // }
    
    TimeCallFuncDefine() {
        setTimeout(() => {
          this.onChangeText();
        }, 500)
    }

    onLoadSpine() {
        // Assuming your spine skeleton data is located at 'resources/loadSpine/alien-ess'
        cc.resources.load('loadSpine/alien-ess', sp.SkeletonData, (err, skeletonData) => {
        if (err) {
          console.error("Failed to load skeleton data:", err);
          return;
        }
      
        // Create the skeleton animation node using the loaded skeleton data
        this.spin = new cc.Node();
        const skeleton = this.spin.addComponent(sp.Skeleton);
        skeleton.skeletonData = skeletonData;
      
        // Set the position of the skeleton animation node
        this.spin.setPosition(0, 0);
      
        // Add the skeleton animation node to the current node
        this.node.addChild(this.spin);
      
        // Call the play method if you want to start the animation immediately
        skeleton.setAnimation(0, 'run', true);
      });
    }

    onChangeText() {
      this.label.string = "button letter changed";
    }   
}
