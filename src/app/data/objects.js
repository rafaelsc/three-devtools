import { object } from './common.js';

const Renderable = {
  type: 'renderable',
  props: [{
    name: 'Geometry',
    prop: 'geometry',
    type: 'geometry',
  }, {
    name: 'Material',
    prop: 'material',
    type: 'material',
  }, ...object]
};

const Light = {
  type: 'light',
  props: object,
}
const Helper = {
  type: 'helper',
  props: object,
}
const Bone = {
  type: 'bone',
  props: object,
}
// Does not have a further classification yet
const Object3D = {
  type: 'object',
  props: object,
}

export default {
  Mesh: Renderable,
  Line: Renderable,
  LineLoop: Renderable,
  LineSegments: Renderable,
  Points: Renderable,

  AmbientLight: Light,
  DirectionalLight: Light,
  HemisphereLight: Light,
  PointLight: Light,
  RectAreaLight: Light,
  SpotLight: Light,

  ArrowHelper: Helper,
  AxesHelper: Helper,
  BoxHelper: Helper,
  Box3Helper: Helper,
  CameraHelper: Helper,
  DirectionalLightHelper: Helper,
  FaceNormalsHelper: Helper,
  GridHelper: Helper,
  PolarGridHelper: Helper,
  PositionalAudioHelper: Helper,
  HemisphereLightHelper: Helper,
  PlaneHelper: Helper,
  PointLightHelper: Helper,
  RectAreaLightHelper: Helper,
  SkeletonHelper: Helper,
  SpotLightHelper: Helper,
  VertexNormalsHelper: Helper,
 
  Skeleton: Bone,
  Bone: Bone,

  Object3D: Object3D,
  Group: Object3D,
  PerspectiveCamera: Object3D,
  OrthographicCamera: Object3D,
  Camera: Object3D,
};